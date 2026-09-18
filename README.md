# AgentForge

AgentForge 是一个面向 **AI Engineer / LLM Application Developer** 学习与实践的个人学习工作台。

它的目标不是做一个普通的课程播放器或待办应用，而是把学习过程组织成一个持续反馈的闭环：

> Goal → Roadmap → Daily Tasks → Learn → Practice → Evaluate → Mastery → Replan

AgentForge 希望解决的核心问题是：

- 不知道 AI Engineer 应该按什么顺序学习
- 学过很多知识，但缺少真正的项目实践
- 学习内容碎片化，难以判断自己真正掌握了什么
- 很容易追逐新框架，却缺少 HTTP、API、数据库、LLM 调用、Agent Loop 等底层能力
- 缺少一个能够长期记录学习进度、薄弱点和项目成果的统一工作台

---

## Project Goal

AgentForge 的长期目标是成为一个个人化的 **AI Engineer Learning OS**。

系统会围绕用户的目标、当前能力和学习历史，逐渐形成完整的学习闭环：

1. 定义目标岗位与能力要求
2. 生成阶段性学习路线
3. 将路线拆分成每日可执行任务
4. 提供学习材料和编程实验
5. 记录学习时间、完成情况和实践结果
6. 评估不同技能维度的掌握程度
7. 发现薄弱点并调整后续学习计划
8. 最终沉淀为可以展示的项目与能力档案

最终希望 AgentForge 不只是告诉用户：

> “你学了什么”

而是能够回答：

> “你现在真正会什么、还缺什么、下一步最值得学什么。”

---

## Core Features

### Today

每日学习工作台。

集中展示：

- 今日推荐任务
- 后续学习任务
- 今日学习时间
- 连续学习记录
- 当前技能掌握度
- 快捷学习入口

目标是让用户打开 AgentForge 后，不需要重新思考：

> “我今天应该学什么？”

---

### Roadmap

维护面向目标岗位的阶段性学习路线。

AgentForge 当前规划的 AI Engineer 学习顺序为：

1. Python Engineering
2. HTTP / JSON / REST API
3. LLM API
4. Structured Output
5. Tool Calling
6. RAG
7. Raw Agent Loop
8. State & Memory
9. LangGraph
10. MCP
11. Evals & Tracing
12. Model Internals

设计原则是：

> **先理解底层机制，再学习框架。**

例如在使用 LangGraph 之前，会先手写基本 Agent Loop；在学习 RAG 框架之前，会先理解 Embedding、Retrieval 和 Context Construction。

---

### Learn

承载结构化学习内容。

未来会将知识点组织成：

- Concepts
- Examples
- Exercises
- Notes
- Review Questions

学习内容不仅用于阅读，也会和 Lab、Mastery、Roadmap 产生关联。

---

### Lab

面向真实工程能力的实践环境。

计划覆盖：

- Python 编程练习
- HTTP / API 实验
- FastAPI 后端开发
- 数据库 CRUD
- LLM API 调用
- Structured Output
- Tool Calling
- Agent Loop
- RAG
- Agent State / Memory
- Evaluation

Lab 的重点不是刷算法题，而是练习 AI Application Engineer 工作中真正会遇到的问题。

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

---

### Mastery

AgentForge 不采用单纯 XP 驱动的游戏化体系，而是更关注实际能力。

技能掌握计划从多个维度评估，例如：

- Concept
- Coding
- Debugging
- Design

每项能力可以逐渐从：

```text
0 - Unknown
1 - Familiar
2 - Understand
3 - Can Implement
4 - Can Debug / Explain
5 - Can Design Independently
