import axios from "axios";

const getapi = async (params) => {
  const apiUrl =
    "https://kevin-backend1-88d2246a90f2.herokuapp.com/api/v1/users";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDM1ODgxZTg1ZDMzMDAxYjI3ZjUxMyIsImlhdCI6MTcwNDEyNzA3NywiZXhwIjoxNzExOTAzMDc3fQ.15yFyKQ035AVjHl3yuUFFM0rvsTKsX1gwycYHQJHXjE";

  try {
    const response = await axios.get(apiUrl, {
      params: { ...params },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default getapi;
