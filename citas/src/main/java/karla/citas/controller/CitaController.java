package karla.citas.controller;

import karla.citas.model.Cita;
import karla.citas.model.CitaMascota;
import karla.citas.model.Mascota;
import karla.citas.repository.CitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
public class CitaController {

    @Autowired
    CitaRepository citaRepository;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping(value = "/listCitas")
    public List<Cita> getListaCitas(){
        return citaRepository.findAll();
    }

    @CrossOrigin
    @GetMapping(value = "/list")
    public List<Cita> getlistaCita(){
        Cita [] cita = restTemplate.getForObject(
                "http://localhost:9999/listCitas", Cita[].class);
        List<Cita> lm = Arrays.asList(cita);
        return lm;
    }

    @CrossOrigin
    @PostMapping(value = "/{citaId}")
    public Cita getCita(@PathVariable("citaId") int citaId){
        return citaRepository.findByCitaid(citaId);
    }

    @CrossOrigin
    @PostMapping(value = "/cita/add")
    public Cita addCita(@RequestBody Cita cita){
        return citaRepository.save(cita);
    }

    @CrossOrigin
    @GetMapping(value = "/citaMascota")
    public List<CitaMascota> getListCitaM(){

        CitaMascota[] listC = restTemplate.getForObject(
                "http://localhost:48080/listCitas",
                CitaMascota[].class);

        Mascota[] m =  restTemplate.getForObject(
                "http://localhost:28080/listMascota",
                Mascota[].class);

        for (int i =0;i<listC.length;i++){
            for (int j = 0;j<m.length;j++){

                if(m[j]!=null){
                    if (listC[i].getMascotaid() == m[j].getMascotaId()){
                        Mascota aux = null;

                        if(listC[i].getMascota() == null){
                            listC[i].setMascota(m[j]);
                        }
                    }
                }

            }
            if(i == (listC.length-1)){
                return Arrays.asList(listC);
            }
        }
        List<CitaMascota> C = Arrays.asList(listC);

        return C;

    }
 

    @CrossOrigin
    @PutMapping(value = "/cita/update")
    public Cita updateCita(@RequestBody Cita cita){
        Cita c = citaRepository.findByCitaid(cita.getCitaid());
        if(c!=null){
            c.setServicio(cita.getServicio());
            c.setFecha(cita.getFecha());
            c.setHora(cita.getHora());
            c.setMascotaid(cita.getMascotaid());
            return citaRepository.save(c);
        }
        return null;
    }

    @CrossOrigin
    @DeleteMapping(value = "/cita/delete")
    public Boolean deleteCita(@RequestBody Cita cita){
       Cita c = citaRepository.findByCitaid(cita.getCitaid());

        if(c!=null){
            citaRepository.delete(c);
            return true;
        }
        return null;
    }
}
