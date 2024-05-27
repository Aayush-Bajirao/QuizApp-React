import React from "react";
import Navbar from "../../components/Navbar";
import "./Analytics.css";
import { Link } from "react-router-dom";

export default function Analytics() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="page">
        <h2 class="head">Analytics</h2>
        <table class="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Quiz Name</th>
              <th>Created On</th>
              <th>Imprresions</th>
              <th>Action</th>
              <th>Question wise Analysis Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <Link to="/questionwiseanalysis">Link</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <Link to="/questionwiseanalysis">Link</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <Link to="/questionwiseanalysis">Link</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <Link to="/questionwiseanalysis">Link</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <Link to="/questionwiseanalysis">Link</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <Link to="/questionwiseanalysis">Link</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <a>Link</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <a>Link</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <a>Link</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <a>Link</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <a>Link</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Quiz 1</td>
              <td>04 Sep, 2023</td>
              <td>345</td>
              <td>
                <a>Edit</a> <a>Delete</a> <a>Share</a>
              </td>
              <td>
                <a>Link</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
