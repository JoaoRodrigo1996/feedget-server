"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const nodemailer_mail_adapter_1 = require("./adapters/nodemailer/nodemailer-mail-adapter");
const prisma_feedbacks_repository_1 = require("./repositories/prisma/prisma-feedbacks-repository");
const submit_feedback_use_case_1 = require("./use-cases/submit-feedback-use-case");
exports.routes = (0, express_1.Router)();
exports.routes.post("/feedbacks", async (request, response) => {
    const { type, comment, screenshot } = request.body;
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);
    await submitFeedbackUseCase.execute({ type, comment, screenshot });
    return response.status(201).send();
});
