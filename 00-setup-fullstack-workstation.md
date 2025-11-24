# 🧩 Fullstack Workstation Setup — Configuração Inicial Premium

Autor: Bruno Gonzaga Teixeira Correa (br-gonzaga)
Data: 23/11/2025

---

# 📌 1. Visão Geral

Este documento registra a configuração profissional do ambiente de desenvolvimento Fullstack utilizado por Bruno Gonzaga, incluindo:

- Instalação e configuração do Git
- Autenticação via SSH com GitHub
- Organização dos repositórios locais
- Setup inicial do VS Code
- Estrutura de diretórios
- Padronização do ambiente

Este arquivo faz parte do repositório fullstack e serve como referência para futuras reinstalações, novos dispositivos ou desenvolvedores do time.

---

# 📦 2. Instalação do Git

Download:
👉 https://git-scm.com/download/win

Instalação padrão recomendada:
Git from the command line and also from 3rd-party software

Verificar instalação:
git --version

---

# 👤 3. Configuração do Usuário Global

git config --global user.name "br-gonzaga"
git config --global user.email "bteixeiracorrea@gmail.com"


Verificar:
git config --global --list

---

# 🔐 4. Criação da Chave SSH (Padrão Enterprise)

Gerar chave moderna ed25519:
ssh-keygen -t ed25519 -C "bteixeiracorrea@gmail.com"


Local padrão:
C:\Users\bteix\.ssh\id_ed25519
C:\Users\bteix\.ssh\id_ed25519.pub


Exibir chave pública:
cat ~/.ssh/id_ed25519.pub

---

# 🔗 5. Registro da Chave SSH no GitHub

Acessar:
👉 https://github.com/settings/keys

Adicionar:
Title: VSCode-PC
Key: conteúdo completo do arquivo .pub

---

# 🧠 6. Ativar Chave no SSH Agent (Windows)

Start-Service ssh-agent
ssh-add $HOME\.ssh\id_ed25519

---

# 🚀 7. Teste de Autenticação

ssh -T git@github.com

Sucesso esperado:
Hi br-gonzaga! You've successfully authenticated, but GitHub does not provide shell access.

---

# 📂 8. Organização da Estrutura de Projetos

Todos os repositórios locais ficam em:
C:\Users\bteix\OneDrive\Documentos\GitHub\

Repositórios sincronizados via SSH:
- Arquitetura-BGS-IDP-Connect/
- fipool-assets/
- inclusa-assets/
- software-project/
- fullstack/

---

# 🔄 9. Atualização dos Remotes para SSH

Exemplo para qualquer repositório:
git remote set-url origin git@github.com:br-gonzaga/NOME-DO-REPOSITORIO.git
git remote -v

Repositórios configurados:
software-project                   → git@github.com:br-gonzaga/software-project.git
fipool-assets                      → git@github.com:br-gonzaga/fipool-assets.git
inclusa-assets                     → git@github.com:br-gonzaga/inclusa-assets.git
Arquitetura-BGS-IDP-Connect        → git@github.com:br-gonzaga/Arquitetura-BGS-IDP-Connect.git
fullstack                          → git@github.com:br-gonzaga/fullstack.git

---

# 🎯 10. Commit e Push Sem Senha (SSH)

git add .
git commit -m "chore: initial fullstack environment setup"
git push

Todo o fluxo agora é autenticado automaticamente via SSH.

---

# 🧰 11. VS Code – Configuração Recomendada

Extensões essenciais:
- GitHub Copilot
- GitLens
- Prettier
- ESLint
- Live Server
- Docker
- Dev Containers
- WSL (se usar Linux interno)

Tema e UI opcionais:
- One Dark Pro
- Material Icon Theme

---

# 🏁 12. Próximos Passos

- Criar documentação da stack Node.js
- Configurar ambiente React / Vite
- Criar template padrão de repositórios
- Documentar padrões de commits (Conventional Commits)
- Criar ambiente DevOps (Docker + Compose + Pipelines)

---

# 🏆 Conclusão

O ambiente Fullstack está agora configurado com:

✔️ Git + GitHub integrados via SSH
✔️ VS Code configurado
✔️ Estrutura profissional de projetos
✔️ Push/pull seguro sem senha
✔️ Repositório inicial organizado
✔️ Documentação premium registrada

Este documento pode ser reutilizado em qualquer futuro setup.