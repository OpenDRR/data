let layers = [ 'nhsl_risk_dynamics_indicators', 'nhsl_social_fabric_indicators', 'nhsl_physical_exposure_indicators', 'nhsl_hazard_threat_indicators']
for ( l in layers ) {
    $( '#select-rgn-' + layers[l] ).on( 'change', function() {
    $( ".ab, .bc, .mb, .ns, .nl, .qc, .on, .nu, .yt, .nt, .sk, .pe, .nb, .rgn" ).hide();

    $("select").val( $( this ).val() );

    if ( $( this ).val() ) {
        let p = '.' + $( this ).val() + ', .rgn';
        $( p ).fadeIn();
    }
    });
}
