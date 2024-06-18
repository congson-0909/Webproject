package com.codeElevate.ServiceBookingSystem.services.company;

import com.codeElevate.ServiceBookingSystem.dto.ReservationDTO;
import com.codeElevate.ServiceBookingSystem.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class CompanyServiceImpl {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<ReservationDTO> getAllAdBookings(Long companyId) {
        return reservationRepository.findAllByCompanyId(companyId)
                .stream()
                .map(Reservation::getReservationDto)
                .collect(Collectors.toList());
    }

}
// ad these function to the file