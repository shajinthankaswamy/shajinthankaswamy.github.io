---
layout: page
title: Differentiable Topology Optimization in JAX
description: Fully differentiable FEM solver for inverse design of magnetic components
img: assets/img/12.jpg
importance: 1
category: work
---

Architected a fully differentiable finite element solver for magnetic components using **JAX** and **Lineax**. The entire pipeline — sparse stiffness matrix assembly (BCOO format), preconditioned conjugate gradient solve, and inductance computation — supports exact gradient computation via JAX's `grad`, `jit`, and `vmap`.

### Key Features

- **Differentiable FEM**: Sparse stiffness matrix assembly, preconditioned CG solve, and inductance computation all support automatic differentiation.
- **SIMP Topology Optimization**: Density-based topology optimization with tanh Heaviside projection and density filtering for ferrite core air gap design.
- **GPU Acceleration**: Optimized JAX compilation pipelines for CUDA-enabled GPUs with careful trace management to eliminate recompilation overhead.
- **Validation**: 32 unit tests spanning FEM assembly, loss gradients, density parameterization, and end-to-end optimization.
- **Achievement**: Achieves target inductances within 5% error across 7 design targets (150–500 nH) using L-BFGS-B with 4-stage continuation.

### Tech Stack

`JAX` `Lineax` `NumPy` `SciPy` `CUDA` `Gmsh` `L-BFGS-B` `Python`

