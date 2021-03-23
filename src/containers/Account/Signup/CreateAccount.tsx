import React, {useState} from "react";
import StepBarComponent from "../../../components/commons/ui/StepBar";

type Account = {
    mail: string | undefined,
    password: string | undefined
}

const blackAccount = {
    mail: undefined,
    password: undefined
}

const CreateAccount: React.VFC = () => {
  const [account, setAccount] = useState<Account>(blackAccount);
    const handleAccount = (e: React.ChangeEvent<HTMLInputElement>, val: string): void => setAccount({
        ...account,
        [val]: e.target.value
    })

    return (
      <div className="container px-6 py-14 box-border mx-auto h-screen">
          <div className="tablet:w-9/12 mx-auto px-4 py-6">
              <StepBarComponent num={1}/>
              <form className="pt-12 pb-8 mb-6">
                  <label className="block mb-4" htmlFor="mail">
                      <span className="block font-bold text-custom-black-base">メールアドレス</span>
                      <input
                          value={account.mail}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAccount(e, "mail")}
                          className="w-full bg-custom-gray-200 rounded-lg py-1"
                          type="mail"
                          id="mail"
                      />
                  </label>
                  <label className="block mb-4" htmlFor="password">
                      <span className="block font-bold text-custom-black-base">パスワード</span>
                      <input
                          value={account.password}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAccount(e, "password")}
                          className="w-full bg-custom-gray-200 rounded-lg py-1"
                          type="password"
                          id="password"
                      />
                  </label>
              </form>
              <div className="text-center">
                  <button type="button" className="w-8/12 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                      プロフィール設定へ
                  </button>
              </div>
          </div>
      </div>
  );
};

export default CreateAccount;
