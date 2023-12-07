import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactList = ({ list }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <h1>Contacts List</h1>
      <ul>
        {list.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
