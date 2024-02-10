"use server";

import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export async function fillForm(
  name: string,
  phone: string,
  message: string,
  formname: string
) {
  const prisma = new PrismaClient();
  try {
    const response = await prisma.bricksviewer.create({
      data: {
        id: uuidv4(),
        name: name,
        phone: phone,
        message: message,
        form: formname,
      },
    });

    if (response) {
      return {
        status: 200,
        message: "Form submitted successfully",
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}

export async function subscibeNewsletter(email: string, website: string) {
  const prisma = new PrismaClient();
  try {
    const response = await prisma.mails.create({
      data: {
        id: uuidv4(),
        email: email,
        website: website,
      },
    });

    if (response) {
      return {
        status: 200,
        message: "Subscribed successfully",
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}

export async function getAllEmails() {
  // get all emails of website="bricksviewer"
  const prisma = new PrismaClient();
  try {
    const response = await prisma.mails.findMany({
      where: {
        website: "bricksviewer",
      },
    });

    if (response) {
      return {
        status: 200,
        message: "All emails",
        data: response,
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}

export async function deleteEmail(id: string) {
  const prisma = new PrismaClient();
  try {
    const response = await prisma.mails.delete({
      where: {
        id: id,
      },
    });

    if (response) {
      return {
        status: 200,
        message: "Deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}

export async function getAllPhoneNumbers() {
  const prisma = new PrismaClient();
  try {
    const response = await prisma.bricksviewer.findMany();

    if (response) {
      return {
        status: 200,
        message: "All phone numbers",
        data: response,
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}

export async function deleteRecord(id: string) {
  const prisma = new PrismaClient();
  try {
    const response = await prisma.bricksviewer.delete({
      where: {
        id: id,
      },
    });

    if (response) {
      return {
        status: 200,
        message: "Deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}
