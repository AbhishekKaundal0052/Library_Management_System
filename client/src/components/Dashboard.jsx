import React, { useState, useEffect } from "react";
import { BookOpen, User, Plus, ArrowUpDown } from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [borrowers, setBorrowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_API_KEY; 
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "x-api-key": API_KEY,
        };

        // Fetch books
        const booksResponse = await axios.get(`${BASE_URL}/books`, { headers });
        setBooks(booksResponse.data);

        // Fetch members
        const borrowersResponse = await axios.get(`${BASE_URL}/members`, { headers });
        setBorrowers(borrowersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_KEY, BASE_URL]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex gap-4 p-6 bg-gray-100 min-h-screen">
      {/* Books Section */}
      <div className="w-1/2 bg-green-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Books</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {books.length > 0 ? (
            books.map(book => (
              <div key={book.book_id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-sm mb-2">{book.book_name}</h3>
                <div className="text-sm mt-2">Publisher - {book.book_publisher}</div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No books available</p>
          )}
        </div>
      </div>

      {/* Borrowers Section */}
      <div className="w-1/2 bg-blue-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">Borrower List</h2>
          </div>
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1">
            <Plus className="w-4 h-4" />
            New
          </button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center p-3 border-b">
            <div className="flex items-center gap-2 flex-1">
              <span className="font-medium">Member Name</span>
              <ArrowUpDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex-1">
              <span className="font-medium">Books Borrowed</span>
            </div>
          </div>

          {borrowers.length > 0 ? (
            borrowers.map(borrower => (
              <div key={borrower.id} className="flex items-center p-3 border-b hover:bg-gray-50">
                <div className="flex-1">{borrower.name}</div>
                <div className="flex-1">
                  {borrower.books.length > 0 ? (
                    borrower.books.map((book, index) => (
                      <div key={index} className="text-sm text-gray-600">{book}</div>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400">No books borrowed</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 p-3">No borrowers found</p>
          )}
        </div>

        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <span>Total Members: {borrowers.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
