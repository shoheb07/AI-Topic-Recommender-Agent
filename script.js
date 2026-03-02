// All chapters with High / Medium topics derived from official previous-year papers & state question banks.
const physicsTopics = {
  "Rotational Dynamics": {
    high: [
      "Moment of Inertia (rod, disc, sphere) & calculations",
      "Torque and Angular Momentum (conservation problems)",
      "Rolling without slipping — relation between v & ω",
      "Parallel/Perpendicular Axis Theorem applications"
    ],
    medium: [
      "Rotational kinetic energy",
      "Rotational dynamics of systems (compound bodies)"
    ]
  },

  "Mechanical Properties of Fluids": {
    high: [
      "Pressure in a fluid (hydrostatic) and Pascal's law",
      "Buoyancy and Archimedes’ principle (floatation problems)",
      "Bernoulli’s equation and applications"
    ],
    medium: [
      "Viscosity, Stoke’s law & terminal velocity",
      "Surface tension — examples and problems"
    ]
  },

  "Kinetic Theory of Gases & Radiation": {
    high: [
      "Ideal gas equation and kinetic interpretation of temperature",
      "Distribution of velocities (qualitative) and RMS speed",
      "Blackbody radiation — Stefan-Boltzmann law (basic)"
    ],
    medium: [
      "Degrees of freedom and molar specific heats",
      "Mean free path (conceptual problems)"
    ]
  },

  "Thermodynamics": {
    high: [
      "First law of thermodynamics (ΔQ = ΔU + W) — sign conventions",
      "Second law — Carnot engine efficiency and reversible processes",
      "Entropy — change calculations for typical processes"
    ],
    medium: [
      "PV diagrams for isothermal/adiabatic/isobaric/isovolumetric processes",
      "Heat engines & refrigerators (basic cycles)"
    ]
  },

  "Oscillations": {
    high: [
      "Simple harmonic motion (SHM) — equations, phase, amplitude, period",
      "Energy in SHM (kinetic + potential) and time dependence",
      "Damped & forced oscillations — basic concepts and resonance"
    ],
    medium: [
      "SHM from simple systems (spring-mass, pendulum approximations)",
      "Relation between SHM and uniform circular motion"
    ]
  },

  "Superposition of Waves": {
    high: [
      "Principle of superposition — constructive & destructive interference",
      "Beats and Doppler effect (basic formula applications)"
    ],
    medium: [
      "Standing waves in strings & pipes (nodes & antinodes)",
      "Phase difference, path difference and resultant amplitude"
    ]
  },

  "Wave Optics": {
    high: [
      "Young’s double-slit — fringe spacing, conditions for maxima/minima",
      "Diffraction at single slit — central maximum width, qualitative",
      "Interference in thin films (air/soap film) — constructive/destructive"
    ],
    medium: [
      "Polarization — Malus’s law (basic)",
      "Resolving power (qualitative)"
    ]
  },

  "Electrostatics": {
    high: [
      "Coulomb’s law & superposition of point charges",
      "Electric field & potential of point charge and dipole",
      "Gauss’s law — symmetric charge distributions",
      "Capacitance & parallel plate capacitor problems (combination)"
    ],
    medium: [
      "Electric potential energy & equipotential surfaces",
      "Dielectric constant and effect on capacitance"
    ]
  },

  "Current Electricity": {
    high: [
      "Ohm’s law and resistivity — circuit calculations",
      "Kirchhoff’s laws — mesh & node problems",
      "Wheatstone bridge & potentiometer (principles/applications)",
      "Drift velocity and microscopic form of Ohm’s law"
    ],
    medium: [
      "Combination of resistors (series/parallel)",
      "Temperature dependence of resistance"
    ]
  },

  "Magnetic Effects of Electric Current": {
    high: [
      "Biot–Savart law & magnetic field of a long straight wire",
      "Ampere’s law (qualitative problems) and solenoid/coil fields",
      "Force on a current-carrying conductor and torque on rectangular loop"
    ],
    medium: [
      "Magnetic field on axis of circular loop",
      "Motion of charges in magnetic fields (circular/helix paths)"
    ]
  },

  "Magnetism": {
    high: [
      "Magnetic dipole moment and bar magnet field (qualitative)",
      "Hysteresis curve (basic concepts) and magnetic materials"
    ],
    medium: [
      "Magnetic susceptibility & permeability (definitions)",
      "Earth’s magnetism (basic)"
    ]
  },

  "Electromagnetic Induction": {
    high: [
      "Faraday’s law — induced emf & Lenz’s law",
      "Self and mutual inductance — energy stored in inductor",
      "Eddy currents (qualitative) and applications"
    ],
    medium: [
      "RL circuits (time constant and transient behaviour)",
      "Induced emf in moving conductors"
    ]
  },

  "Alternating Current": {
    high: [
      "AC definitions: rms, peak, phase difference",
      "Reactance of capacitor & inductor, impedance of RLC series",
      "Resonance in RLC circuit (frequency, quality factor)"
    ],
    medium: [
      "Power in AC circuits (average, instantaneous)",
      "LC oscillations (qualitative)"
    ]
  },

  "Dual Nature of Radiation & Matter": {
    high: [
      "Photoelectric effect — Einstein’s equation and cutoff frequency",
      "De Broglie wavelength and electron diffraction basics"
    ],
    medium: [
      "Wave-particle duality experiments (qualitative)",
      "Applications: electron microscope (basic)"
    ]
  },

  "Atoms & Nuclei": {
    high: [
      "Bohr model — energy levels, spectral lines (hydrogenic atoms)",
      "Radioactivity: α, β, γ decay characteristics and basic equations",
      "Binding energy and mass-energy relation (basic problems)"
    ],
    medium: [
      "Nuclear fission & fusion (conceptual)",
      "Half-life calculations (simple decay problems)"
    ]
  },

  "Semiconductor Devices": {
    high: [
      "PN junction diode: I–V characteristics and diode circuits",
      "Zener diode (voltage regulation) and reverse breakdown",
      "BJT: basic operation (common-emitter amplifier concepts)",
      "Logic gates from semiconductor devices (basic truth tables)"
    ],
    medium: [
      "Rectifier circuits (half-wave, full-wave) and filters (qualitative)",
      "Biasing concepts (fixed bias, potential divider)"
    ]
  }
};

// UI functions
const chapterSelect = document.getElementById('chapterSelect');
const result = document.getElementById('result');
const getBtn = document.getElementById('getBtn');
const allBtn = document.getElementById('allBtn');

function renderChapter(name, info){
  const div = document.createElement('div');
  div.className = 'chapter';
  const h = document.createElement('h3');
  h.textContent = name;
  div.appendChild(h);

  const highBadge = document.createElement('span');
  highBadge.className = 'badge-high';
  highBadge.textContent = 'High priority';
  div.appendChild(highBadge);

  const medBadge = document.createElement('span');
  medBadge.className = 'badge-med';
  medBadge.textContent = 'Medium priority';
  div.appendChild(medBadge);

  const u1 = document.createElement('ul');
  info.high.forEach(t=>{
    const li = document.createElement('li'); li.textContent = t; u1.appendChild(li);
  });
  const u2 = document.createElement('ul');
  info.medium.forEach(t=>{
    const li = document.createElement('li'); li.textContent = t; u2.appendChild(li);
  });

  // put high then medium
  const highTitle = document.createElement('p');
  highTitle.innerHTML = '<strong>High:</strong>';
  div.appendChild(highTitle);
  div.appendChild(u1);

  const medTitle = document.createElement('p');
  medTitle.innerHTML = '<strong>Medium:</strong>';
  div.appendChild(medTitle);
  div.appendChild(u2);

  return div;
}

function showTopicsFor(chapter){
  result.innerHTML = '';
  if(!chapter){
    result.innerHTML = '<p>Please select a chapter.</p>';
    return;
  }
  const info = physicsTopics[chapter];
  if(!info){ result.innerHTML = '<p>Chapter not found.</p>'; return; }
  result.appendChild(renderChapter(chapter, info));
}

function showAllCompact(){
  result.innerHTML = '';
  Object.keys(physicsTopics).forEach(ch=>{
    const info = physicsTopics[ch];
    const div = document.createElement('div');
    div.className = 'chapter';
    const h = document.createElement('h3'); h.textContent = ch; div.appendChild(h);

    const p = document.createElement('p');
    p.innerHTML = '<strong>High:</strong> ' + info.high.slice(0,4).join('; ');
    div.appendChild(p);
    result.appendChild(div);
  });
}

// Event listeners
getBtn.addEventListener('click', ()=> showTopicsFor(chapterSelect.value));
chapterSelect.addEventListener('keydown', (e)=> { if(e.key==='Enter') showTopicsFor(chapterSelect.value); });
allBtn.addEventListener('click', showAllCompact);

// Show initial compact view
showAllCompact();
