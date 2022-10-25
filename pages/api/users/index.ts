import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IUser } from "../../../interfaces/user";
import { IUsers, User } from "../../../models";

type Data = { message: string } | IUsers[] | IUser;

export default function handlerUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getUsers(res);

    case "POST":
      return addUser(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getUsers = async (res: NextApiResponse<Data>) => {
  // check if user autenticate succefull

  try {
    await db.connect();
    const users = await User.find().sort({ _id: "asc" });
    res.status(200).json(users);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
};

const addUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // check if user autenticate succefull and if user is admin
  const {
    name,
    password,
    email,
    role,
    userInfo: {
      position,
      presentation,
      image,
      areaOfExpertise,
      skills,
      examenDegree,
      assignments: {
        asgmtName,
        companyName,
        asgmtLocation,
        asgmtStartDate,
        asgmtEndDate,
        asgmtDescr,
      },
    },
  } = req.body;

  try {
    const newUser = new User({
      name,
      password,
      email,
      role,
      userInfo: {
        position,
        presentation,
        image,
        areaOfExpertise,
        skills,
        examenDegree,
        assignments: {
          asgmtName,
          companyName,
          asgmtLocation,
          asgmtStartDate,
          asgmtEndDate,
          asgmtDescr,
        },
      },
    });
    await db.connect();
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Bad Request" });
  }
};
