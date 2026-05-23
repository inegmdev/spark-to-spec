/* Hallmark · motion: GSAP + ScrollTrigger
 * recipe: sticky-scroll-sync · number-reveal · stagger-reveal
 */

gsap.registerPlugin(ScrollTrigger);

// 1. Initialize Mock UI state
const mockUIs = document.querySelectorAll('.mock-ui');
const phases = document.querySelectorAll('.phase');

const updateMockUI = (phaseId) => {
  console.log('Switching to phase:', phaseId);
  mockUIs.forEach(ui => {
    if (ui.dataset.mockPhase === phaseId) {
      ui.classList.add('active');
      
      // Special animations for specific phases
      if (phaseId === 'v') {
        const scoreNum = ui.querySelector('.mock-score__num');
        gsap.to(scoreNum, {
          innerText: 4.8,
          duration: 1.2,
          snap: { innerText: 0.1 },
          ease: "power2.out"
        });
      }
      
      // Stagger internal elements
      const children = Array.from(ui.children);
      gsap.fromTo(children, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", overwrite: true }
      );

    } else {
      ui.classList.remove('active');
    }
  });
};

// 2. Setup ScrollTriggers for each phase
phases.forEach(phase => {
  ScrollTrigger.create({
    trigger: phase,
    start: "top center",
    end: "bottom center",
    onEnter: () => updateMockUI(phase.dataset.phase),
    onEnterBack: () => updateMockUI(phase.dataset.phase),
    // Ensure the first one is active if we're already there
    onRefresh: (self) => {
        if (self.isActive) updateMockUI(phase.dataset.phase);
    }
  });
});

// 3. Hero Parallax (Subtle)
if (document.querySelector('.hero__display')) {
    gsap.to(".hero__display", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 50,
    opacity: 0.5,
    ease: "none"
    });
}

// 4. Command Line "Typing" Simulation (on load)
window.addEventListener('DOMContentLoaded', () => {
  const cmd = document.querySelector('.command-line');
  if (!cmd) return;
  
  const text = cmd.innerText.trim();
  cmd.innerText = "";
  
  let i = 0;
  const type = () => {
    if (i < text.length) {
      cmd.innerText += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  };
  
  // Start typing after a short delay
  setTimeout(type, 800);
});

// 5. Initial Call
if (phases.length > 0) {
    updateMockUI(phases[0].dataset.phase);
}
