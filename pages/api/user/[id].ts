import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { IUser } from "../../../interfaces/user";
import { User } from "../../../models";
import { db } from "../../../database";

type Data = { message: string } | IUser;

export default function handlerUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `Invalid id` });
  }

  switch (req.method) {
    case "GET":
      return getUserById(req, res);

    case "PUT":
      return updateUserById(req, res);

    case "DELETE":
      return deleteUser(req, res);

    default:
      res.status(400).json({ message: "Bad Request" });
  }
}

const getUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  // check if user is authenticated. After we need to a middleware for this
  const { id } = req.query;

  try {
    await db.connect();
    const user = await User.findById(id);
    // await db.disconnect()
    if (!user) {
      res.status(400).json({ message: `Bad Request` });
    }
    res.status(200).json(user);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
};

const updateUserById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  // check how update some fiels and not all fiels
  // check if user is authenticated. After we need to a middleware for this so user just only can update self. A user who are admin can also update a user
  const { id } = req.query;

  try {
    await db.connect();
    const userToUpdate = await User.findById(id);

    if (!userToUpdate) {
      await db.disconnect();
      res.status(400).json({ message: `Bad Request` });
    }

    const {
      name = userToUpdate.name,
      password = userToUpdate.password,
      userInfo = userToUpdate.userInfo,
      position = userToUpdate.userInfo.position,
      presentation = userToUpdate.userInfo.presentation,
      image = userToUpdate.userInfo.image,
      areaOfExpertise = userToUpdate.userInfo.areaOfExpertise,
      skills = userToUpdate.userInfo.skills,
      assignments = userToUpdate.userInfo.assignments,
      examenDegree = userToUpdate.userInfo.examenDegree,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        password,
        userInfo,
        position,
        presentation,
        image,
        areaOfExpertise,
        skills,
        assignments,
        examenDegree,
      },
      { runValidators: true, new: true }
    );

    res.status(200).json(updatedUser!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Bad Request" });
  }
};

const deleteUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // check if user is authenticated and if is admin. Only admin can delete a user. After we need to a middleware for this
  const { id } = req.query;
  try {
    await db.connect();
    const userToDelete = await User.findByIdAndDelete(id);

    if (!userToDelete) {
      // this check if user exist
      await db.disconnect();
      res.status(400).json({ message: `Bad Request` });
    }

    res.status(200).json({ message: `User was success deleted` });
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Bad Request" });
  }
};
