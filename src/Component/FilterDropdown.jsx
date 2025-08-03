import React, { useState, useEffect } from 'react';

const FilterDropdown = ({ filters, selectedFilter, onFilterChange, className = '' }) => {
  const [availableFilters, setAvailableFilters] = useState([]);
  const [loading, setLoading] = useState(false);

  // Extract unique filters from the products data
  useEffect(() => {
    if (filters && filters.length > 0) {
      setAvailableFilters(filters);
    } else {
      setAvailableFilters([]);
    }
  }, [filters]);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    onFilterChange(selectedValue === 'all' ? null : selectedValue);
  };

  // Get filter options for a specific filter type
  const getFilterOptions = (filterType) => {
    const filter = availableFilters.find(f => f.Filter_name === filterType);
    return filter ? filter.Filter : [];
  };

  // Get display name for selected filter
  const getSelectedFilterName = (filterId) => {
    for (const filter of availableFilters) {
      const option = filter.Filter.find(opt => opt._id === filterId);
      if (option) {
        return option.name;
      }
    }
    return 'All';
  };

  // Don't show anything if no filters are available
  if (availableFilters.length === 0) {
    return null;
  }

  return (
    <div className={`filter-dropdown-container ${className}`} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <div className="filter-dropdown-wrapper" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        position: 'relative'
      }}>
        <label htmlFor="filter-select" className="filter-label" style={{
          fontWeight: '500',
          color: '#666',
          fontSize: '0.9rem',
          whiteSpace: 'nowrap'
        }}>
          Filter by:
        </label>
        <select
          id="filter-select"
          className="filter-select"
          value={selectedFilter || 'all'}
          onChange={handleFilterChange}
          disabled={loading}
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            background: '#fff',
            fontSize: '0.9rem',
            color: '#333',
            cursor: 'pointer',
            minWidth: '150px',
            transition: 'all 0.2s ease'
          }}
        >
          <option value="all">All</option>
          {availableFilters.map((filter) => (
            <optgroup key={filter._id} label={filter.Filter_name}>
              {filter.Filter.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {selectedFilter && (
          <button
            className="clear-filter-btn"
            onClick={() => onFilterChange(null)}
            title="Clear filter"
            style={{
              background: '#ff4757',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '0.8rem',
              transition: 'all 0.2s ease'
            }}
          >
            <i className="fa fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown; 