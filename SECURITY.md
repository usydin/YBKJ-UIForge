# 安全政策 | Security Policy

本库为 UI 设计规则与研发约束资料库，不是生产软件或设备控制系统。无生产支持版本或安全 SLA 承诺。

遵循既有 [AGENTS 安全边界](docs/04_agents/AGENTS.security.md)：不得提交真实现场地址、位置、凭据或资产数据；Mock 清晰标识；证据来源及验证等级可追溯；工业项目不得因 UI 优化放松安全边界。

跨项目迁移不得引入第三方未授权材料或私有项目数据。发现泄露或安全问题，使用已建立的授权维护人员私密渠道报告脱敏复现与影响，不在公开 Issue 披露敏感细节。正式报告入口和历史扫描结论待核实。

This is a design and engineering-rule repository, not a production service or device controller. Follow the linked existing security rules: no real field addresses, locations, credentials or asset data; label mock data and verification levels; preserve evidence provenance and industrial safety boundaries. Verify rights before reuse. Report security issues privately to authorized maintainers with sanitized reproduction details.

本政策不代表安全认证或测试通过。
