import { useForm } from "react-hook-form";
import TextInput from "../../../components/ui/TextInput";
import type IAccountFields from "../../../@types/account";
import store from "../../../zustand/store";

export const AccountForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "",
      name: "",
      hasStories: false,
    },
  });

  const addAccount = store((state) => state.addAccounts);

  function onSubmit(data: IAccountFields) {
    addAccount(data);
    store.getState().closeModal();
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
          className="bg-gray-200 border border-gray-400 p-2 rounded-2xl cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
};
