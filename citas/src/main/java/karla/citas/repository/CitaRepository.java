package karla.citas.repository;

import karla.citas.model.Cita;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CitaRepository extends CrudRepository<Cita, Integer> {

    List<Cita> findAll();
    /*Cita findByCitaId(int citaId);*/
    Cita findByCitaid(int citaid);
    Cita save(Cita cita);
    void delete(Cita cita);
}
