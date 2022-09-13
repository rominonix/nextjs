import db from "../../utils/db";

const getUser = async (req, res) => {
    if (req.method == "GET") {

        // res.status(200).json({"hello_messages":"Hello world"})

        const querySnapshot = await db.collection('users').doc('sB6ynEkxzlC6fet1aimb').get()
        res.status(200).json({ querySnapshot })

    }
};

export default getUser
