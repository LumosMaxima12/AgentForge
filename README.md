# AgentForge

AgentForge 是一个以 **学习 AI Agent / LLM Application Engineering** 为首要目标构建的个人项目，同时也是一个逐步演化中的 **AI Engineer Learning OS**。

这个项目最重要的目的，不是先做出一个功能很多的学习软件，而是通过真实工程实践，系统学习并掌握：

- Python 后端工程
- HTTP / JSON / REST API
- FastAPI / Pydantic
- SQLAlchemy / SQLite / Alembic
- 测试、分层与依赖注入
- LLM API
- Structured Output
- Tool Calling
- Raw Agent Loop
- State / Memory
- RAG
- LangGraph
- MCP
- Evals / Tracing

换句话说：

> **AgentForge 既是学习 AI Agent 开发的载体，也是最终要被做成一个真正能够帮助学习 AI 工程的 Agent 产品。**

---

## Why AgentForge

学习 AI Agent 开发时，很容易直接进入 LangChain、LangGraph 或各种 Agent Framework，但如果缺少下面这些基础：

- HTTP 请求到底如何工作
- API 如何设计
- 数据如何落库
- Service / Repository 分层为什么存在
- LLM 的输入输出是什么
- Structured Output 如何约束模型
- Tool Calling 是如何触发程序执行的
- Agent Loop 到底是谁在循环
- State、Memory、RAG 分别解决什么问题

就很容易变成：

> “会调用框架，但不知道系统为什么能工作。”

AgentForge 的学习路线因此坚持一个原则：

> **Fundamentals Before Frameworks — 先理解机制，再使用框架。**

例如：

- 先学习 HTTP / FastAPI，再接 LLM API
- 先理解数据库与 Repository，再保存 Agent State
- 先学习 Structured Output，再做复杂 Agent 输出
- 先理解 Tool Calling，再构建 Agent Tools
- 先手写 Raw Agent Loop，再进入 LangGraph
- 先理解 Retrieval / Context Construction，再封装 RAG

---

## Project Goal

AgentForge 有两个互相连接的目标。

### 1. 学习目标：通过项目掌握 AI Agent Engineering

这是当前最主要的目标。

项目会按照真实工程系统的方式逐步增加复杂度，而不是单独学习一堆互不关联的教程。

当前学习路径：

```text
Backend Foundation
        ↓
LLM API
        ↓
Structured Output
        ↓
Tool Calling
        ↓
Raw Agent Loop
        ↓
State / Memory
        ↓
RAG
        ↓
LangGraph
        ↓
MCP / Evals / Tracing
```

每一个阶段都会直接进入 AgentForge 的真实代码，而不是只停留在 Demo。

最终目标是能够独立回答并实现：

> Model 在哪里思考？  
> Agent 程序在哪里决策？  
> Tool 在哪里执行？  
> State 如何流转？  
> Memory 如何保存？  
> RAG 如何构造 Context？  
> Agent 为什么决定继续调用工具或结束？

---

### 2. 产品目标：构建个人 AI Engineer Learning OS

随着 Agent 能力逐步加入，AgentForge 最终希望形成下面的学习闭环：

> **Goal → Roadmap → Daily Tasks → Learn → Practice → Evaluate → Mastery → Replan**

系统能够结合：

- 学习目标
- 当前路线
- 历史任务
- 学习记录
- 技能掌握度
- 编程实践结果
- 知识库
- Agent State

逐渐回答三个核心问题：

> **我现在会什么？**  
> **我还缺什么？**  
> **下一步最值得学什么？**

最终的 Agent 不应该只是聊天机器人，而应该能够读取学习状态、调用真实工具并改变系统状态。

---

## Agent Mental Model

AgentForge 当前采用的基本 Agent 心智模型：

```text
LLM
│
│  reasoning / decision
▼
Agent Loop
│
├── Tool A: query roadmap
├── Tool B: query learning history
├── Tool C: create learning task
├── Tool D: search knowledge
└── Tool E: update learning state
        │
        ▼
State / Memory
```

可以简单理解为：

- **LLM = Brain**：理解输入并决定下一步
- **Tools = Hands**：真正查询数据、调用 API、修改状态
- **State / Memory = Context**：保存当前任务和历史信息
- **Agent Loop = Orchestrator**：负责重复执行“模型决策 → 工具执行 → 结果回传”

AgentForge 后续的 AI 层会围绕这个模型逐步实现。

---

## Current Development Status

当前项目已经完成桌面端基础界面，并正在完成后端基础工程阶段。

### Desktop Foundation

当前桌面端技术栈：

- Tauri
- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Lucide

已完成的基础能力包括：

- Today 学习工作台
- Settings 页面
- Light / Dark Theme
- 中英文切换
- 本地设置持久化
- 路由与基础页面结构

桌面端目前进入维护模式，开发重点已经转向 **Backend + AI Agent**。

---

### Backend Foundation

当前后端技术栈：

- Python
- FastAPI
- Pydantic
- SQLAlchemy 2.x
- SQLite
- Alembic
- pytest
- httpx
- Ruff

当前后端已经形成基础分层：

```text
HTTP Request
     │
     ▼
Router
     │
     ▼
Service
     │
     ▼
Repository
     │
     ▼
SQLAlchemy Session
     │
     ▼
SQLite
```

目前已经实践：

- FastAPI Router
- Pydantic Request / Response Schema
- Dependency Injection
- Service Layer
- Repository Layer
- SQLAlchemy ORM
- SQLite Persistence
- Alembic Migration
- pytest Fixture
- Repository Test
- Service Unit Test + Mock
- API Integration Test + Dependency Override

---

## Current Learning API

当前 Learning Plan API 包括：

```http
POST /api/v1/learning/plan-preview
POST /api/v1/learning/plans
GET  /api/v1/learning/plans
GET  /api/v1/learning/plans/{plan_id}
```

当前请求会经过完整工程链路：

```text
Client
  ↓
FastAPI Router
  ↓
LearningService
  ↓
LearningPlanRepository
  ↓
SQLAlchemy
  ↓
SQLite
```

这一阶段的重点不是 Learning Plan 功能本身，而是通过它理解后续 Agent 系统会依赖的后端基础设施。

---

## Core Product Modules

### Today

每日学习工作台。

未来用于集中展示：

- 今日推荐任务
- 后续任务
- 今日学习时间
- 连续学习记录
- 当前技能状态
- Agent 建议

目标是让用户打开 AgentForge 后快速知道：

> “今天应该做什么？”

---

### Roadmap

维护面向目标岗位的阶段性学习路线。

Roadmap 不只是静态课程目录，未来 Agent 可以结合学习历史与 Mastery 状态动态调整后续计划。

---

### Learn

承载结构化学习内容：

- Concepts
- Examples
- Exercises
- Notes
- Review Questions

后续会与 Knowledge、Lab、Mastery 和 Agent 产生关联。

---

### Lab

用于真实工程实践。

计划覆盖：

- Python Engineering
- HTTP / REST API
- FastAPI
- Database CRUD
- LLM API
- Structured Output
- Tool Calling
- Raw Agent Loop
- State / Memory
- RAG
- Evaluation

重点不是单纯刷题，而是练习 AI Application Engineer 在真实项目中会遇到的问题。

---

### Knowledge

个人知识库。

未来用于沉淀：

- 学习笔记
- 技术概念
- Debug 记录
- API 使用经验
- Agent 设计模式
- 项目经验
- 面试知识点

后续也会成为 RAG 的数据来源之一。

---

### Mastery

AgentForge 不希望只用 XP 或完成数量表示学习成果，而是尝试描述真实工程能力。

计划从多个维度记录：

- Concept
- Coding
- Debugging
- Design

能力等级可以逐渐从：

```text
0 - Unknown
1 - Familiar
2 - Understand
3 - Can Implement
4 - Can Debug / Explain
5 - Can Design Independently
```

Mastery 数据未来会成为 Agent 重新规划学习路线的重要输入。

---

## Development Roadmap

### Phase 1 — Backend Foundation

- [x] FastAPI / Pydantic
- [x] REST API
- [x] Router / Service / Repository layering
- [x] SQLite
- [x] SQLAlchemy ORM
- [x] CRUD foundation
- [x] pytest
- [x] Alembic
- [ ] Complete backend integration-test foundation

### Phase 2 — LLM Foundation

- [ ] Environment / API Key configuration
- [ ] Async LLM API client
- [ ] Error handling
- [ ] Prompt / Message abstraction
- [ ] Basic chat endpoint

### Phase 3 — Structured Output

- [ ] Define structured model responses
- [ ] Validate model output
- [ ] Connect structured output to application state

### Phase 4 — Tool Calling

- [ ] Define Tool schemas
- [ ] Execute Tools from model decisions
- [ ] Return Tool results to model
- [ ] Add AgentForge learning tools

Initial tools may include:

- Query Roadmap
- Query Learning History
- Query Mastery
- Create Learning Task
- Search Knowledge
- Update Learning State

### Phase 5 — Raw Agent Loop

Before introducing Agent frameworks, implement the loop manually:

```text
User Input
   ↓
LLM
   ↓
Tool Call?
 ┌─┴───────────┐
 No            Yes
 │              ↓
Final       Execute Tool
Answer           ↓
             Tool Result
                 ↓
                LLM
```

The goal is to understand what an Agent framework is actually abstracting.

### Phase 6 — State & Memory

- [ ] Conversation State
- [ ] Learning State
- [ ] Short-term Memory
- [ ] Persistent Memory

### Phase 7 — RAG

- [ ] Document ingestion
- [ ] Chunking
- [ ] Embeddings
- [ ] Retrieval
- [ ] Context construction
- [ ] Knowledge search Tool

### Phase 8 — LangGraph

After the Raw Agent Loop is understood:

- [ ] Graph State
- [ ] Nodes
- [ ] Edges
- [ ] Conditional Routing
- [ ] Persistent execution

### Phase 9 — Agent Engineering

- [ ] MCP
- [ ] Evals
- [ ] Tracing
- [ ] Observability
- [ ] Failure recovery
- [ ] Model / Tool evaluation

---

## Repository Structure

```text
AgentForge/
├── apps/
│   ├── desktop/          # Tauri + React desktop client
│   └── server/           # FastAPI backend
│       ├── alembic/      # Database migrations
│       ├── app/
│       │   ├── api/      # HTTP routers
│       │   ├── core/     # config / database
│       │   ├── models/   # SQLAlchemy models
│       │   ├── repositories/
│       │   ├── schemas/  # Pydantic schemas
│       │   └── services/
│       └── tests/
└── README.md
```

---

## Development Philosophy

AgentForge 遵循几个长期原则：

### Learn by Building

不把学习和项目分开。

每一个新知识点都应该最终进入真实代码。

### Fundamentals Before Frameworks

先理解：

- HTTP
- Database
- LLM API
- Tool Calling
- Agent Loop
- State

再使用高级 Agent Framework。

### Engineering Over Demo

目标不是做出一个只能演示一次的 AI Demo，而是逐步建立：

- 清晰的模块边界
- 可测试代码
- 数据持久化
- 错误处理
- 可观察性
- 可维护架构

### Build for Real Skills

每个功能都应该对应一个真实工程能力，而不是单纯为了增加 Feature 数量。

---

## What AgentForge Should Eventually Become

最终理想状态下，AgentForge 中会存在一个真正参与学习过程的 Learning Agent：

```text
User
 │
 ▼
Learning Agent
 │
 ├── Read current roadmap
 ├── Read learning history
 ├── Inspect mastery
 ├── Search personal knowledge
 ├── Create / adjust tasks
 ├── Evaluate practice results
 └── Update learning state
 │
 ▼
Next Learning Action
```

它不是简单回答问题，而是能够：

> **读取状态 → 做出决策 → 调用工具 → 改变系统 → 根据结果继续行动。**

这也是 AgentForge 最终用来验证 AI Agent Engineering 学习成果的核心功能。

---

## Current Focus

当前开发重点：

> **完成 Backend Foundation，然后进入 LLM API → Structured Output → Tool Calling → Raw Agent Loop。**

项目当前最重要的评价标准不是“页面多不多”，而是：

> **是否真的理解并能够独立实现一个 Agent 系统的每一层。**
