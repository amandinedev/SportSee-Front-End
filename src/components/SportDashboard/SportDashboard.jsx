import React from "react";
import PropTypes from "prop-types";

const SportDashboard = ({ sport }) => {
  return (
    <div className="sport-dashboard">
      <h2>{sport} Dashboard</h2>
      {/* Placeholder for future implementation */}
      <p>Coming soon: Detailed {sport} statistics and charts.</p>
    </div>
  );
};

SportDashboard.propTypes = {
  sport: PropTypes.string.isRequired,
};

export default SportDashboard;
