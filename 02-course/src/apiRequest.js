const apiRequest = async (url = "", optObj = null, errorMsg = null) => {
  try {
    const response = await fetch(url, optObj);
    if (!response.ok) throw Error("Refresh App");
  } catch (error) {
    errorMsg = error.message;
  } finally {
    return errorMsg;
  }
};

export default apiRequest;
