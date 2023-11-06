import connectToDB from "@/app/database";
import Account from "@/modals/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Account ID is required",
      });
    }

    const deleteAccount = await Account.findByIdAndDelete(id);

    if (deleteAccount) {
      return NextResponse.json({
        success: true,
        message: "Account deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went Wrong",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong",
    });
  }
}
