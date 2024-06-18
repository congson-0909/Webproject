package com.codeElevate.ServiceBookingSystem.services.company;

import com.codeElevate.ServiceBookingSystem.dto.ReservationDTO;

public interface CompanyService {

    List<ReservationDTO> getAllAdBookings(Long companyId);
}



//add these function to file