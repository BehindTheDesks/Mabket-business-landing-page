// import React, { useEffect, useRef } from 'react';

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d', { alpha: true });

//     let animationFrameId;
//     let width = window.innerWidth;
//     let height = canvas.parentElement.offsetHeight || 600;

//     const resize = () => {
//       width = window.innerWidth;
//       height = canvas.parentElement.offsetHeight || 600;
//       canvas.width = width * window.devicePixelRatio;
//       canvas.height = height * window.devicePixelRatio;
//       ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//     };

//     window.addEventListener('resize', resize);
//     resize();

//     // Drop SVG path for teardrop particles
//     const dropPath = new Path2D("M14.6 4.4C12.8 1.5 9.1 0 5.4 0C2.4 0 0 2.4 0 5.4C0 8.4 1.5 10.9 3.5 12.5L9.5 19.5L13.8 12.9C15.4 11.2 16.5 8.4 16.2 5.8C16.1 5.3 15.9 4.8 14.6 4.4Z");

//     // Create 100 gold/amber teardrop particles
//     const particles = Array.from({ length: 100 }).map(() => ({
//       ratioX: Math.random() * 1.2 - 0.1,
//       ratioY: Math.random() * 1.2 - 0.1,
//       scale: 0.5 + Math.random() * 0.8,
//       rotation: Math.random() * Math.PI * 2,
//       timeOffset: Math.random() * 1000,
//       speed: 0.0008 + Math.random() * 0.0012,
//       parallax: 0.01 + Math.random() * 0.04,
//       wobble: Math.random() * 0.3
//     }));

//     let mouseX = width / 2;
//     let mouseY = height / 2;

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };
//     window.addEventListener('mousemove', handleMouseMove);

//     const render = (time) => {
//       ctx.clearRect(0, 0, width, height);

//       particles.forEach((p) => {
//         const floatY = Math.sin(time * p.speed + p.timeOffset) * 20;
//         const floatX = Math.cos(time * p.speed * 0.8 + p.timeOffset) * 15;

//         const baseX = p.ratioX * width;
//         const baseY = p.ratioY * height;
        
//         let px = baseX + floatX;
//         let py = baseY + floatY;
        
//         // Calculate distance to mouse
//         const dx = mouseX - px;
//         const dy = mouseY - py;
//         const dist = Math.sqrt(dx * dx + dy * dy);
        
//         // Particles strongly follow mouse
//         if (dist < 400) {
//           const strength = Math.max(0, 1 - (dist / 400));
//           const force = strength * 25;
//           const angle = Math.atan2(dy, dx);
//           px += Math.cos(angle) * force;
//           py += Math.sin(angle) * force;
//         }

//         ctx.save();
//         ctx.translate(px, py);
//         ctx.rotate(p.rotation + Math.sin(time * 0.001 + p.timeOffset) * 0.2 + p.wobble);
//         ctx.scale(p.scale, p.scale);

//         const grad = ctx.createLinearGradient(3, 3, 12, 17);
//         grad.addColorStop(0, '#3B82F6');
//         grad.addColorStop(0.5, '#F59E0B');
//         grad.addColorStop(1, '#FBBF24');
        
//         ctx.fillStyle = grad;
//         ctx.globalAlpha = 0.7 + (p.scale * 0.25);
        
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
//         ctx.shadowBlur = 3;
//         ctx.shadowOffsetY = 1;

//         ctx.fill(dropPath);
//         ctx.restore();
//       });

//       animationFrameId = window.requestAnimationFrame(render);
//     };

//     render(0);

//     return () => {
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas 
//       ref={canvasRef} 
//       className="absolute inset-0 z-0 pointer-events-none"
//       style={{ width: '100%', height: '100%' }}
//     />
//   );
// };

// export default ParticleBackground;
