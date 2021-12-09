package karla.citas.model;

public class CitaMascota extends Cita {
    private Mascota mascota;

    public CitaMascota() {
    }

    public CitaMascota(Mascota mascota) {
        this.mascota = mascota;
    }

    public CitaMascota(int citaid, String servicio, String fecha, String hora, int mascotaid, Mascota mascota) {
        super(citaid, servicio, fecha, hora, mascotaid);
        this.mascota = mascota;
    }

    public Mascota getMascota() {
        return mascota;
    }

    public void setMascota(Mascota mascota) {
        this.mascota = mascota;
    }
}
