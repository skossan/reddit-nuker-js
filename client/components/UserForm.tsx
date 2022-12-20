import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import axios from "axios";
import RedditComment from "./RedditComment";

interface UserData {
  username: string;
  password: string;
}

// interface Comment {
//   data: [];
// }

const UserForm = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });
  const [comments, setComments] = useState([]);

  const getAllComments = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/getComments", {
        userData,
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: [event.target.value] });
  };

  const deleteAllComments = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Delete all comments");
  };

  return (
    <form>
      <div className="flex flex-col items-center">
        <InputField
          labelText="Username:"
          value={userData.username}
          type="text"
          name="username"
          placeholderText="username"
          onChange={handleOnChange}
          required
        />
        <InputField
          labelText="Password:"
          value={userData.password}
          type="password"
          name="password"
          placeholderText="password"
          onChange={handleOnChange}
          required
        />
        <br />
        <div className="flex justify-center w-full">
          <Button
            buttonText="Get Comments"
            type="submit"
            onClick={getAllComments}
          />
          <Button
            buttonText="Delete All Comments"
            onClick={deleteAllComments}
          />
        </div>
        <br />
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          List of comments:
        </p>
        <br />
        <div>
          {comments.map((comment) => {
            return (
              <RedditComment
                key={comment.id}
                commentBody={comment.body}
                commentID={comment.id}
                commentLink={comment.link_permalink}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default UserForm;
