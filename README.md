# Discipulado — Igreja de Vencedores

App de discipulado (46 lições + quiz) com cadastro de alunos, registro de acessos
e painel administrativo, pronto para publicar no Firebase Hosting e no GitHub.

## Estrutura

```
discipulado-igreja/
├── public/
│   └── index.html      ← o app inteiro (não mexer, exceto o firebaseConfig)
├── firebase.json        ← configuração do Hosting + Realtime Database
├── database.rules.json  ← regras do Realtime Database
├── .firebaserc           ← já aponta para o projeto "discipulado-igreja"
└── .gitignore
```

---

## PASSO 1 — Configuração do Firebase ✅ já feita

O `firebaseConfig` do projeto **discipulado-igreja** já está inserido dentro de
`public/index.html`. Você não precisa mexer nisso.

## PASSO 2 — Confirmar que o Realtime Database está criado

1. No menu lateral do Firebase, vá em **Compilação → Realtime Database**.
2. Se aparecer a tela pedindo para **"Criar banco de dados"**, clique nela, escolha a
   localização e inicie em **modo de teste**.
3. Se já existir um banco criado, confirme que a URL mostrada no topo é exatamente:
   `https://discipulado-igreja-default-rtdb.firebaseio.com`
4. As regras já estão prontas no arquivo `database.rules.json` (liberam leitura/escrita
   somente em `users/` e `config/`, que é o que o app usa) — elas são publicadas junto
   no passo 4 abaixo.

## PASSO 3 — Instalar o Firebase CLI (só na primeira vez)

```bash
npm install -g firebase-tools
firebase login
```

## PASSO 4 — Publicar no Firebase Hosting

Dentro da pasta `discipulado-igreja` (onde está o `firebase.json`):

```bash
firebase deploy
```

Isso publica o `public/index.html` como seu site (ex: `https://discipulado-igreja.web.app`) **e** publica as regras do Realtime Database.

Se quiser publicar só o Hosting:
```bash
firebase deploy --only hosting
```

## PASSO 5 — Subir para o GitHub

Dentro da mesma pasta:

```bash
git init
git add .
git commit -m "App de discipulado - versão inicial"
git branch -M main
git remote add origin https://github.com/souzabrasil-s-b/disciplinado-igreja.git
git push -u origin main
```

Se o repositório já tiver algum arquivo (README criado pelo próprio GitHub, etc.), use antes:
```bash
git pull origin main --allow-unrelated-histories
```
e resolva eventuais conflitos antes do `git push`.

---

## Painel do administrador

- Na tela inicial do app, role até o final da lista de lições.
- Toque no ícone de cadeado 🔒 discreto.
- Senha: **Atlanta**

## Observação sobre segurança

As regras em `database.rules.json` liberam leitura e escrita em `users/` e `config/`
para qualquer pessoa que tenha o link do app — a trava do painel admin é só na
interface (senha "Atlanta"), não no banco de dados. Isso é suficiente para uso
interno da igreja/escola, mas se quiser reforçar depois, dá para adicionar
autenticação (Firebase Auth) e regras que restrinjam a escrita em `config/`
(link do WhatsApp) só ao seu usuário administrador.
