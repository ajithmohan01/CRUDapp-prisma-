import db from "../config/db.js";
import { response } from "../utils/common.js";

class UserService {
  
   getallusers=async(req, res)=>{
    const users = await this.findallusers();
    if (users) {
      res.status(201).json(response( "success", "founded all users", users ));
    } else {
      res.status(409).json(response( "failed", "Users not founded", null ));
    }
  }

  findallusers=()=>{
    return db.user.findMany();
  }

   deleteuserbyId=async(req, res)=>{
    const id = req.params.id;
    const deletePosts = await db.user.delete({
      where: { id: String(id) },
    });
    if (deletePosts) {
      res.status(201).json(response( "success", "deleted user succesfully", deletePosts ));
    } else {
      res.status(409).json(response( "failed", "failed to delete user", null ));
    }
  }

   updateuserbyId=async(req, res)=>{
    const id = req.params.id;
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      address,
      city,
      state,
      country,
      zipcode,
    } = req.body;
    const update = await db.user.update({
      data: {
        firstname,
        lastname,
        email,
        phone,
        password,
        address,
        city,
        state,
        country,
        zipcode,
      },
      where: { id: String(id) },
    });
    if (update) {
      res.status(201).json(response( "success", "updated user succesfully", update ));
    } else {
      res.status(409).json(response( "failed", "failed to update user", null ));
    }
  }

   getuserbyId=async(req, res)=>{
    const userbyId = await this.finduser(req.params.id);
    if (userbyId) {
      res.status(201).json(response( "success", "user founded succesfully", userbyId ));
    } else {
      res.status(409).json(response( "failed", "failed to found user", null ));
    }
  }

  finduser=(id)=>{
    return db.user.findUnique({
      where: {
        id,
      },
    });
  }
}

export default new UserService();
