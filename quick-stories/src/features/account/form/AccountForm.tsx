import { useForm } from "react-hook-form";
import TextInput from "../../../components/ui/TextInput";
import type IAccountFields from "../../../@types/account";

export const AccountForm = ({
  setOpenAddUser,
}: {
  setOpenAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const accounts = JSON.parse(localStorage.getItem("users") || "[]");
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "",
      name: "",
    },
  });

  function onSubmit(data: IAccountFields) {
    accounts.push(data);
    localStorage.setItem("users", JSON.stringify(accounts));
    setOpenAddUser(false);
    console.log(accounts);
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">ID:</label>
        <TextInput {...register("id")} type="text" placeholder="Enter Id" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <TextInput {...register("name")} type="text" placeholder="Enter Name" />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gray-200 border border-gray-400 p-2 rounded-full cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
};
