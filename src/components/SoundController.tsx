import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const SoundController: React.FC = () => {
    const [muted, setMuted] = useState(true);
    const audioContextRef = useRef<AudioContext | null>(null);
    const droneOscillators = useRef<OscillatorNode[]>([]);
    const gainNodeRef = useRef<GainNode | null>(null);

    const initAudio = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

            // Master Gain
            const masterGain = audioContextRef.current.createGain();
            masterGain.gain.value = 0.1; // Low volume for ambience
            masterGain.connect(audioContextRef.current.destination);
            gainNodeRef.current = masterGain;

            // Drone 1 (Low Deep Hum)
            const osc1 = audioContextRef.current.createOscillator();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(55, audioContextRef.current.currentTime); // A1
            osc1.connect(masterGain);
            osc1.start();
            droneOscillators.current.push(osc1);

            // Drone 2 (Slightly detuned for beating effect)
            const osc2 = audioContextRef.current.createOscillator();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(57, audioContextRef.current.currentTime);
            osc2.connect(masterGain);
            osc2.start();
            droneOscillators.current.push(osc2);

            // Drone 3 (Higher harmonic)
            const osc3 = audioContextRef.current.createOscillator();
            osc3.type = 'triangle';
            osc3.frequency.setValueAtTime(110, audioContextRef.current.currentTime); // A2
            const osc3Gain = audioContextRef.current.createGain();
            osc3Gain.gain.value = 0.05; // Quieter
            osc3.connect(osc3Gain);
            osc3Gain.connect(masterGain);
            osc3.start();
            droneOscillators.current.push(osc3);
        }

        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
    };

    const toggleMute = () => {
        if (muted) {
            initAudio();
            if (gainNodeRef.current) {
                gainNodeRef.current.gain.setTargetAtTime(0.1, audioContextRef.current!.currentTime, 0.5);
            }
            setMuted(false);
        } else {
            if (gainNodeRef.current && audioContextRef.current) {
                gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5);
            }
            setMuted(true);
            // Optionally suspend after fade out, but keeping it running is smoother for toggle
        }
    };

    // Global Hover Sound Effect
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            if (muted || !audioContextRef.current) return;

            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('a') || target.closest('button')) {
                // Play simple blip
                const osc = audioContextRef.current.createOscillator();
                const gain = audioContextRef.current.createGain();

                osc.connect(gain);
                gain.connect(audioContextRef.current.destination);

                osc.type = 'sine';
                // Randomize pitch slightly for organic feel
                const freq = 800 + Math.random() * 200;
                osc.frequency.setValueAtTime(freq, audioContextRef.current.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, audioContextRef.current.currentTime + 0.15);

                gain.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1);

                osc.start();
                osc.stop(audioContextRef.current.currentTime + 0.15);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => window.removeEventListener('mouseover', handleMouseOver);
    }, [muted]);

    return (
        <button
            onClick={toggleMute}
            className="fixed bottom-8 right-8 z-50 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[#4FFFB0] hover:bg-[#4FFFB0]/20 transition-all duration-300 group"
        >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 text-xs font-mono text-white/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {muted ? 'INITIALIZE AUDIO' : 'MUTE SYSTEM'}
            </span>
        </button>
    );
};

export default SoundController;
