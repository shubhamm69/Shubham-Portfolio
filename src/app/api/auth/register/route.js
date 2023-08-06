
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, email, password } = await request.json();
    await connect();
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    try {
        await user.save();
        return new NextResponse("User has been created", {
            status: 201,
        });
    }
    catch (err) {
        return new NextResponse(err.messsage, {
            status: 500,
        });
    }
}