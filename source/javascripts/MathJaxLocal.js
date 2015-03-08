MathJax.Hub.Config({
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$'],['\\[','\\]']],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  messageStyle: "none",
  "HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"] },
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    extensions: ["AMSmath.js", "AMSsymbols.js"],
    TagSide: "left",
    Macros: {
      reals: ['\\mathbb{R}'],
      complex: ['\\mathbb{C}'],
      rationals: ['\\mathbb{Q}'],
      integers: ['\\mathbb{Z}'],
      naturals: ['\\mathbb{N}'],
      fields: ['\\mathbb{F}'],

      zeros: ['\\mathbf{0}'],
      ud: ['\\,\\mathrm{d}'],

      vect:['\\boldsymbol{\\mathbf{#1}}',1],
      abs: ['\\lvert#1\\rvert', 1],
      abslr:['\\left\\lvert#1\\right\\rvert', 1],
      norm: ['\\lVert#1\\rVert', 1],
      normlr: ['\\left\\lVert#1\\right\\rVert', 1],

      lcm: ['\\mathop{\\mathrm{lcm}}'],
      interior: ['\\mathop{\\mathrm{int}}'],
      exterior: ['\\mathop{\\mathrm{ext}}'],
      volume: ['\\mathop{\\mathrm{vol}}'],

      Binom: ['\\mathop{\\mathrm{Binom}}'],
      Exp: ['\\mathop{\\mathrm{Exp}}'],
      Poi: ['\\mathop{\\mathrm{Poi}}'],

      GL: ['\\mathrm{GL}'],
      SL: ['\\mathrm{SL}'],
      Aut: ['\\mathrm{Aut}'],
    }
  }
});

MathJax.Ajax.loadComplete("https://vincenttam.github.io/javascripts/MathJaxLocal.js");
