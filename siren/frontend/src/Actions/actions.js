export const loadData = (data) => ({
  
    type: "LOAD_DATA",
    payload: data,
  
});

export const getUser = () => {
    return async (dispatch) => {
        try {
            const options = {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Token ${token}`,
            },
        };
        const resp = await fetch(
          "http://localhost:8000/api/user/",
          options
        );
        const userdata = await resp.json();
        dispatch(loadData(userdata));
        } catch (err) {
        throw new Error(err.message);
      }
    };
};