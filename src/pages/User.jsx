import Account from "../components/Account";
import Header from "../components/Header";
import accountsData from "../Data/accountsData.json";

function User() {
	return (
		<>
			<Header />
			{accountsData.map((account, index) => (
				<Account key={index} title={account.title} amount={account.amount} description={account.description} />
			))}
		</>
	);
}

export default User;
