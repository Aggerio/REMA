import Form from "../components/Form";
function Login(){
  return (
    <div className="flex w-full h-screen bg-[#1f1d2b]">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-[#ea7c69] to-pink-500 rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-blue-600/10 backdrop-blur-lg"/>
      </div> 
    </div>
  );
}
export default Login;