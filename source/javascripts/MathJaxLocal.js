MathJax.Hub.Config({
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    TagSide: "left",
    Macros: {
      reals: ['\\mathbb{R}'],
      complex: ['\\mathbb{C}'],
      rationals: ['\\mathbb{Q}'],
      integers: ['\\mathbb{Z}'],
      naturals: ['\\mathbb{N}'],
      fields: ['\\mathbb{F}'],

      zeros: ['\\mathbf{0}'],

      vect:['\\boldsymbol{\\mathbf{#1}}',1],
      abs: ['\\lvert#1\\rvert', 1],
      abslr:['\\left\\lvert#1\\right\\rvert', 1],
      norm: ['\\lVert#1\\rVert', 1],
      normlr: ['\\left\\lVert#1\\right\\rVert', 1],

      interior: ['\\mathop{\\mathrm{int}}'],
      exterior: ['\\mathop{\\mathrm{ext}}'],
      volume: ['\\mathop{\\mathrm{vol}}'],
    }
  }
});

MathJax.Ajax.loadComplete("/javascripts/MathJaxLocal.js");
