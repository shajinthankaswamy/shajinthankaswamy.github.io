---
layout: page
title: A Comparative Study of Optimization Algorithms for Differentiable Physics Simulation
description: Systematic comparative study of optimization algorithms — L-BFGS-B, Adam, CMA-ES, NSGA-III, and Bayesian optimization — for differentiable FEM-based inverse design of magnetic components in JAX/Lineax.
img:
importance: 1
category: work
github: https://github.com/shajint/A-Comparative-Study-of-Optimization-Algorithms-for-Differentiable-Physics-Simulation
---

**PQ Core Geometry Parameterization:** Parameterized core geometry with 5 design variables (center post diameter, leg inner diameter, leg height, window height, coil clearance) for differentiable optimization.

**Differentiable FEM Solver:** Built a JAX-based differentiable 2D axisymmetric FEM operator (Lineax backend) with sparse stiffness matrix assembly (BCOO format), preconditioned conjugate gradient solve, and inductance computation — all supporting exact gradients via `jax.grad`, `jit`, and `vmap`.

**Objective Function Design:** Formulated loss function combining inductance targeting with optional volume regularization for multi-objective trade-off analysis.

**Analytical Model Integration:** Implemented analytical fringing field model for hybrid FEM-analytical validation and benchmarking.

**Optimizer Benchmark Framework:** Structured benchmark pipeline for comparing gradient-based (L-BFGS-B, Adam), evolutionary (CMA-ES, NSGA-III), and surrogate-based (Bayesian optimization) methods on convergence speed, accuracy, and constraint handling.

**Full Test Suite:** Comprehensive test suite covering FEM solver correctness, gradient accuracy, geometry parameterization, and optimization convergence across the PQ core design space.
