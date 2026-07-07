# CLAUDE.md

This file provides guidance to Claude Code when working on the taskboard-app project.

## Project Overview

taskboard-app is a task board (Kanban-style) application.

## デプロイ先

https://tokunagaakiraeng.github.io/taskboard/

- `main` ブランチへの push をトリガーに GitHub Actions（`.github/workflows/deploy.yml`）が自動ビルド・デプロイする
- `vite.config.ts` の `base` はこのデプロイ先パス（`/taskboard/`）と一致させること

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite 8
- **Lint**: oxlint
- **状態管理**: React のローカル state（カスタムフック `useTasks`）＋ `localStorage` への永続化
- **ルーティング**: なし（単一画面）
- **バックエンド**: なし（フロントエンドのみ）
- **スタイリング**: 通常の CSS（`App.css` / `index.css`）、CSS-in-JS やユーティリティ CSS フレームワークは未使用

## コンポーネントの命名規約

- コンポーネントファイル・関数名は英語のパスコンドケース（例：`App.tsx` → `function App()`）
- カスタムフックは `use` から始まるキャメルケース（例：`useTasks.ts` → `useTasks()`）
- 型定義は `types.ts` に集約し、型名は英語のパスコンドケース（例：`Task`）
- CSS クラス名は英語のケバブケース（例：`task-item`, `task-form`, `delete-button`）
- 状態変更を伴う関数名は動詞始まり（例：`addTask`, `toggleTask`, `deleteTask`）

## Git Workflow

**Commit and push to GitHub after every code change.**

- Every time a file is created or edited, immediately stage, commit, and push the change — do not batch multiple unrelated edits into one commit.
- Write concise commit messages that describe the "why" of the change, not just the "what".
- Do not force-push, rewrite history, or skip commit hooks unless explicitly instructed.
- If a push fails (e.g., no remote configured yet, or conflicts), stop and inform the user rather than working around it silently.

## コーディング規約

- コメントは日本語で書く
- 変数名は英語のキャメルケース（例：userName）を使う

## 返答ルール

- 返答は必ず日本語で行う

## 禁止事項

- `rm -rf` コマンドは絶対に実行しない
- `.env` ファイルを読んだり変更したりしない
- `package.json` の依存パッケージを無断で変更しない
- データベースへの削除操作（DELETE文）を実行しない

## Development Notes

(Add build/test/lint commands here once the project is scaffolded.)
