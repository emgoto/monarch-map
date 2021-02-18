import { useMutation } from "blitz"
import createEventMutation from "app/mutations/createEvent"

const Form = ({ address, coords, date, setDate }) => {
  const [createEvent] = useMutation(createEventMutation)

  return (
    <div className="p-4 flex flex-col">
      <div className="text-2xl text-yellow-700">Report a sighting</div>
      <input
        className="w-80 p-2 my-4 bg-gray-200 rounded-md"
        disabled
        placeholder="Search for a location on the map"
        value={address}
      />
      <input
        className="w-80 p-2 my-4 bg-gray-100 rounded-md"
        placeholder="Enter date of sighting"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button
        onClick={() => createEvent({ date, coords })}
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 my-4 rounded w-24"
      >
        Submit
      </button>
    </div>
  )
}

export default Form
