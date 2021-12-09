package karla.citas.model;

import javax.persistence.*;

@Entity
@Table(name = "cita")

public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int citaid;

    @Column(name = "hora")
    private String  hora;

    @Column(name = "servicio")
    private String servicio;

    @Column(name = "fecha")
    private String fecha;

    @Column(name = "mascotaid")
    private int mascotaid;


    public Cita(){}

    public Cita(int citaid, String servicio, String fecha, String hora, int mascotaid) {
        this.hora = hora;
        this.citaid = citaid;
        this.servicio = servicio;
        this.fecha = fecha;
        this.mascotaid = mascotaid;
    }

    public int getCitaid() {
        return citaid;
    }
    public void setCitaid(int citaid) {
        this.citaid = citaid;
    }

    public String getHora() {
        return hora;
    }
    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getServicio() {
        return servicio;
    }
    public void setServicio(String servicio) {
        this.servicio = servicio;
    }

    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public int getMascotaid() {
        return mascotaid;
    }
    public void setMascotaid(int mascotaid) {
        this.mascotaid = mascotaid;
    }
}