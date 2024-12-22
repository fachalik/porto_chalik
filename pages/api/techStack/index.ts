/* eslint-disable @next/next/no-server-import-in-page */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utility/db";

type SuccessResponse<T> = {
  success: true;
  data?: T;
  message?: string;
};

type ErrorResponse = {
  success: false;
  message: string;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) {
  try {
    switch (req.method) {
      case "GET": {
        const techStack = await prisma.techStack.findMany();
        return res.status(200).json({ success: true, data: techStack });
      }

      case "POST": {
        const postData = req.body;

        if (!postData || !postData.name) {
          return res.status(400).json({
            success: false,
            message: "Invalid POST data. 'name' is required.",
          });
        }

        const newTechStack = await prisma.techStack.create({ data: postData });
        return res.status(201).json({ success: true, data: newTechStack });
      }

      case "PUT": {
        const { id, ...updateData } = req.body;

        if (!id || !Object.keys(updateData).length) {
          return res.status(400).json({
            success: false,
            message:
              "Invalid PUT data. 'id' and fields to update are required.",
          });
        }

        const updatedTechStack = await prisma.techStack.update({
          where: { id },
          data: updateData,
        });
        return res.status(200).json({ success: true, data: updatedTechStack });
      }

      case "DELETE": {
        const { id } = req.query;

        if (!id || Array.isArray(id)) {
          return res.status(400).json({
            success: false,
            message: "Invalid DELETE data. 'id' is required.",
          });
        }

        await prisma.techStack.delete({ where: { id: id } });
        return res.status(200).json({
          success: true,
          message: `Deleted tech stack with id: ${id}`,
        });
      }

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).json({
          success: false,
          message: `Method ${req.method} not allowed`,
        });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
}
