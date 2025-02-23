import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [pendingReturns, setPendingReturns] = useState([]);

  useEffect(() => {
    // Fetch pending books (Replace with your actual API endpoint)
    axios.get("http://localhost:8080/api/books")
      .then(response => setPendingReturns(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#6D4C41] p-6 text-white flex justify-center">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardContent>
          <Typography variant="h5" component="div" className="text-center text-brown-900 font-bold mb-4">
            Pending Book Returns
          </Typography>
          <TableContainer component={Paper} className="bg-[#D7CCC8]">
            <Table>
              <TableHead>
                <TableRow className="bg-[#8D6E63]">
                  <TableCell className="text-white font-bold">Member Name</TableCell>
                  <TableCell className="text-white font-bold">Book Title</TableCell>
                  <TableCell className="text-white font-bold">Due Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingReturns.length > 0 ? pendingReturns.map((record, index) => (
                  <TableRow key={index} className="hover:bg-[#A1887F]">
                    <TableCell>{record.memberName}</TableCell>
                    <TableCell>{record.bookTitle}</TableCell>
                    <TableCell>{record.dueDate}</TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-4 text-gray-700">
                      No pending returns for today
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
