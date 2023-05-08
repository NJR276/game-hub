import Message from "./components/Message";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import { useEffect, useState } from "react";
// import Heart from "./components/Heart";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./components/Expensepage/ExpenseList/ExpenseList";
import ExpenseFilter from "./components/Expensepage/ExpenseFilter/ExpenseFilter";
import ExpensePage from "./components/Expensepage/ExpensePage";
import ProductList from "./components/ProductList";
import userService, { User } from "./services/user-service";
import { CanceledError } from "./services/api-client";
import useUsers from "./hooks/useUsers";

function App() {
  // let items = ["New York", "Dallas", "Austin", "Houston", "LA"];
  let count = 0;

  const [isApproved, setApproved] = useState(true);

  const handleSelectItem = (item: String) => {
    console.log(item);
    count++;
  };

  const [alertVisible, setAlertVisbility] = useState(false);
  const [liked, setLiked] = useState(false);

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  // const [isLoading, setLoading] = useState(false);

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // const [cartItems, setCartItems] = useState([
  //   "Product1",
  //   "Product2",
  //   "Product3",
  // ]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = (id: number) => {
    // console.log(id);
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });

    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    // setGame({
    //   ...game,
    //   player: { ...game.player, name: "Bob" },
    // });
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // setBugs(
    //   produce((draft) => {
    //     const bug = draft.find((bug) => bug.id === 1);
    //     if (bug) bug.fixed = true;
    //   })
    // );
  };

  const [category, setCategory] = useState("");

  // useEffect(() => {
  //   // const fetchUsers = async () => {
  //   //   try {
  //   //     const res = await axios.get<User[]>(
  //   //       "https://jsonplaceholder.typicode.com/xusers"
  //   //     );
  //   //     setUsers(res.data);
  //   //   } catch (err) {
  //   //     setError((err as AxiosError).message);
  //   //   }
  //   // };
  //   // fetchUsers();
  //   // const controller = new AbortController();

  //   setLoading(true);
  //   const { request, cancel } = userService.getAll<User>();

  //   request
  //     .then((res) => {
  //       setUsers(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });

  //   return () => cancel();
  // }, []);

  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "John Doe" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]));
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : user)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex  justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Houshold">Houshold</option>
      </select>

      <ProductList category={category}></ProductList> */}

      {/* <ExpensePage></ExpensePage> */}

      {/* <Form /> */}

      {/* <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        deserunt ea quisquam unde nobis quam corporis nisi accusantium facilis
        tenetur magni, distinctio perspiciatis, ex deleniti voluptates esse
        animi quas quia nihil iure doloribus? Dignissimos ipsa consequatur in
        reprehenderit eum soluta quas delectus quia possimus pariatur explicabo
        ab, veniam eveniet distinctio odit esse quisquam recusandae atque
        asperiores nemo debitis exercitationem necessitatibus praesentium.
        Dolore provident in eveniet illum maiores alias fugiat, laboriosam et
        libero fuga reprehenderit ratione, quidem labore autem modi fugit
        accusantium dignissimos vel quas voluptatem. Quod ad inventore id
        laboriosam nesciunt neque, asperiores optio velit porro obcaecati ipsam
        aliquam ipsum.
      </ExpandableText>

      <Cart cart={cart} onAdd={handleClick}></Cart> */}

      {/* {pizza.toppings.map((topping) => (
        <p>{topping}</p>
      ))}
      <button onClick={handleClick}>Click</button> */}

      {/* {game.player.name}
      <button onClick={handleClick}>Click</button> */}

      {/* <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={handleClick}></Cart> */}

      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}
          {bug.fixed ? "Fixed" : "New"}
        </p>
      ))} */}
      {/* <button onClick={handleClick}> Click Me</button> */}
      {/* <Heart onClick={() => console.log("clicked")}></Heart> */}
      {/* <BsFillAwardFill />
      {alertVisible && (
        <Alert onClose={() => setAlertVisbility(false)}>Hello World</Alert>
      )}
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisbility(true)}>Button</Button> */}
    </>
  );
}

export default App;
