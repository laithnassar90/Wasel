import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export default function WaselApp() {
  const [rides, setRides] = useState([]);
  const [form, setForm] = useState({ location: '', destination: '', seats: '', isZakaah: false });
  const [search, setSearch] = useState({ location: '', destination: '' });
  const [error, setError] = useState(null);

  const fetchRides = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/rides`);
      const data = response.data;
      if (Array.isArray(data)) {
        setRides(data);
        setError(null);
      } else {
        throw new Error('Response is not an array');
      }
    } catch (err) {
      setError('Failed to fetch rides');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  const handlePost = async () => {
    try {
      await axios.post(`${API_BASE_URL}/rides`, form);
      setForm({ location: '', destination: '', seats: '', isZakaah: false });
      fetchRides();
    } catch (err) {
      setError('Failed to post ride');
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/search`, { params: search });
      const data = res.data;
      if (Array.isArray(data)) {
        setRides(data);
        setError(null);
      } else {
        throw new Error('Search result is not an array');
      }
    } catch (err) {
      setError('Failed to search rides');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚗 Wasel App</h1>

      <div className="mb-4">
        <h2 className="font-semibold">Post a Ride</h2>
        <input placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="border p-2 w-full mb-2" />
        <input placeholder="Destination" value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })} className="border p-2 w-full mb-2" />
        <input placeholder="Seats" value={form.seats} onChange={e => setForm({ ...form, seats: e.target.value })} className="border p-2 w-full mb-2" />
        <label className="flex items-center mb-2">
          <input type="checkbox" checked={form.isZakaah} onChange={e => setForm({ ...form, isZakaah: e.target.checked })} />
          <span className="ml-2">Zakaah Seat</span>
        </label>
        <button onClick={handlePost} className="bg-blue-500 text-white px-4 py-2 rounded">Post Ride</button>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Search Rides</h2>
        <input placeholder="Location" value={search.location} onChange={e => setSearch({ ...search, location: e.target.value })} className="border p-2 w-full mb-2" />
        <input placeholder="Destination" value={search.destination} onChange={e => setSearch({ ...search, destination: e.target.value })} className="border p-2 w-full mb-2" />
        <button onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 rounded">Search</button>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Available Rides</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        {Array.isArray(rides) && rides.length > 0 ? (
          rides.map(ride => (
            <div key={ride.id} className="border rounded p-2 mb-2">
              <p><strong>From:</strong> {ride.location}</p>
              <p><strong>To:</strong> {ride.destination}</p>
              <p><strong>Seats:</strong> {ride.seats}</p>
              {ride.isZakaah && <span className="text-green-600">Zakaah Ride 🌟</span>}
            </div>
          ))
        ) : (
          <p>No rides available.</p>
        )}
      </div>
    </div>
  );
}
