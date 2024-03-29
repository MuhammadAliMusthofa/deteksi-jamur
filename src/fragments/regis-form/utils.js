const registerUser = async (data, setDelay) => {
   setDelay(true);
   try {
      const response = await fetch("https://mymushroom.my.id/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      return responseData;
   } catch (error) {
      console.error("Error fetching mushrooms:", error);
      return { error: true, message: "Failed to fetch mushrooms." };
   } finally {
      setDelay(false);
   }
};

export { registerUser };
