# TypeScript Vercel Serverless Scaffold

A light weight scaffold to deploy non-framework TypeScript serverless functionality to Vercel.

Due a Vercel deployment issue, this repo now uses Husky to build as part of the pre-commit hook. This allows the bundled output to be served correctly as Serverless functions on Vercel.

Run `npm install` and `npm prepare` to setup the project.

When commiting you will be prompted to build the app ready for deployment. Built files will be automatically added to the commit. 