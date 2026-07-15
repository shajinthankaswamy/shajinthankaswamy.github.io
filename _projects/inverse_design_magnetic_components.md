---
layout: page
title: Inverse Design of Magnetic Components
description: Fully differentiable 2D axisymmetric FEM pipeline in JAX/Lineax for gradient-based parametric geometry optimization of magnetic components.
img:
importance: 1
category: work
github: https://github.com/shajint/fully_differentiable_jax_lineax_geometrical_optimization
---

**Solver architecture:** Sparse stiffness matrix assembly (BCOO format), preconditioned conjugate gradient solve, and inductance computation — all supporting exact gradients via `jax.grad`, `jit`, and `vmap`.

**Parametric optimization:** RBF mesh morphing over 5 core geometry parameters (gap length, post radius, inner radius, window height, leg height) using Optimistix/L-BFGS-B. Achieves target inductances within 5% error across 7 design targets (150–500 nH).

**Validation:** Hybrid FEM-analytical pipeline integrating JAX-based FEM with the Kasikowski fringing field model. 32 unit tests across FEM assembly, loss gradients, parameterization, and end-to-end optimization.

**HPC:** Optimized JAX/XLA compilation pipelines for GPU execution, with Lineax and feax linear solver backend comparison on CUDA GPUs. Modular Python package with geometry, mesh, FEM, optimization, and visualization modules.
