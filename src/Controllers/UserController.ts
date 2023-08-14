import { User } from "../Data/Models/Users";
import { Place } from "../Data/Models/Places";
import { Response, Request } from "express";
import bcrypt from 'bcrypt';
import * as dotenv from "dotenv";

const AuthUser = async (req: Request, res: Response) => {
    const {Username, Password} = req.body;
    try{
        const Doc = await User.findOne({Username: Username})
        if(Doc){
            let PassComparing = bcrypt.compareSync(Password, String(Doc.Password))
            if(PassComparing){
                await res.status(202).json({
                    Auth: true,
                    Message: "AUTHENTICATED",
                    User: Doc
                });
                return
            } else {
                await res.status(202).json({
                    Auth: false,
                    Message: "Wrong Username or password",
                    User: null
                });
                return
            }
        }else{
            await res.status(202).json({
                Auth: false,
                Message: "Wrong Username or password",
                User: null
            });
            return
        }
    } catch(err){
        res.status(500).send({
            Message: 'ERROR IN AUTH USER',
            Error: err
        });
        return;
    }
}

const CreateUser = async (req: Request, res: Response) => {
    const {FirstName, LastName, Username, Password, Email} = req.body;
    const Pass = bcrypt.hashSync(Password, 10);
    const Doc = new User({FirstName, LastName, Username, Password: Pass, Email});
    let Validation =  Doc.validateSync();

    if(Validation){
        res.status(500).json({
            Validation
        })
        return;
    } else {
        try{
            await Doc.save();
            res.status(202).json({
                Message: "New User Created",
                Success: true
            });
            return;
        } catch(e) {
            res.status(500).json({
                Message: "ERROR AT CREATING NEW USE, MIGHT HAVE TO CHECK SCHEMA",
                Success: false,
                e
            })
            return;
        }
    }
}

const GetFavorites = async (req: Request, res: Response) => {
    const {UserID} = req.params;

    try{
        const Doc = await User.findOne({_id: UserID})
        if(Doc){
            await res.status(202).json({
                Success: true,
                Message: "SUCCESS",
                Favorites: Doc.FavoritePlaces
            });
        } else {
            await res.status(204).json({
                Success: false,
                Message: "SUCCESS",
                Favorites: []
            });
        }
        
    }catch(err){
        res.status(500).send({
            Success: false, 
            Message: 'ERROR WHILE GETTING FAVORITES',
            Error: err
        });
        return;
    }

}

const AddToFavorites = async (req: Request, res: Response) => {
    const {UserID, PlaceID} = req.body;

    try{
        await User.findOneAndUpdate({_id: UserID}, {$push: {FavoritePlaces: PlaceID}});
        let UserDoc = await User.findOne({_id: UserID})
        await res.status(202).json({
            Success: true,
            Message: "ADDED TO FAVORITES",
            Doc: UserDoc
        });

    } catch(err) {
        res.status(500).send({
            Success: false, 
            Message: 'ERROR ADDING TO FAVORITES',
            Error: err
        });
        return;
    }
}

const RemoveFromFavorites = async (req: Request, res: Response) => {
    const {UserID, PlaceID} = req.body;

    try{
        await User.updateOne({_id: UserID}, {$pull: {FavoritePlaces: PlaceID}});
        let UserDoc = await User.findOne({_id: UserID})
        await res.status(202).json({
            Success: true,
            Message: "REMOVED FROM FAVORITES",
            Doc: UserDoc
        });

    } catch(err) {
        res.status(500).send({
            Success: false, 
            Message: 'ERROR ADDING TO FAVORITES',
            Error: err
        });
        return;
    }
}


export {
    AuthUser,
    CreateUser,
    GetFavorites,
    AddToFavorites,
    RemoveFromFavorites
}